const { z } = require("zod");
const { HttpError } = require("../utils/httpError");
const { env } = require("../utils/env");
const { getOpenAIClient } = require("../utils/openaiClient");

const generateBioSchema = z.object({
  name: z.string().min(1).max(80),
  role: z.string().min(1).max(80).optional().default("Full-stack Developer"),
  years: z.coerce.number().int().min(0).max(50).optional().default(0),
  skills: z.array(z.string().min(1).max(40)).optional().default([]),
  highlights: z.array(z.string().min(1).max(120)).optional().default([]),
  tone: z.enum(["professional", "friendly", "bold"]).optional().default("professional"),
});

const generateProjectDescSchema = z.object({
  title: z.string().min(2).max(120),
  technologies: z.array(z.string().min(1).max(40)).optional().default([]),
  bullets: z.array(z.string().min(1).max(160)).optional().default([]),
  targetRole: z.string().min(1).max(80).optional().default("Full-stack Developer"),
});

const suggestSkillsSchema = z.object({
  role: z.string().min(1).max(80),
  seniority: z.enum(["junior", "mid", "senior"]).optional().default("mid"),
  currentSkills: z.array(z.string().min(1).max(40)).optional().default([]),
});

async function generateBio(req, res, next) {
  try {
    const body = generateBioSchema.parse(req.body);
    const client = getOpenAIClient();
    if (!client) throw new HttpError(503, "OpenAI is not configured");

    const prompt = [
      "You are an expert technical copywriter.",
      "Write a concise portfolio bio in first person (2-4 sentences).",
      `Tone: ${body.tone}.`,
      `Name: ${body.name}. Role: ${body.role}. Years of experience: ${body.years}.`,
      body.skills.length ? `Skills: ${body.skills.join(", ")}.` : "",
      body.highlights.length ? `Highlights: ${body.highlights.join(" | ")}.` : "",
      "Avoid buzzword stuffing. No emojis. No markdown.",
    ]
      .filter(Boolean)
      .join("\n");

    const completion = await client.responses.create({
      model: env.OPENAI_MODEL,
      input: prompt,
      temperature: 0.6,
      max_output_tokens: 220,
    });

    const text = completion.output_text?.trim();
    if (!text) throw new HttpError(502, "Empty AI response");

    res.json({ bio: text });
  } catch (err) {
    if (err instanceof z.ZodError) return next(new HttpError(400, "Validation error", err.flatten()));
    return next(err);
  }
}

async function generateProjectDescription(req, res, next) {
  try {
    const body = generateProjectDescSchema.parse(req.body);
    const client = getOpenAIClient();
    if (!client) throw new HttpError(503, "OpenAI is not configured");

    const prompt = [
      "You are a senior full-stack developer and technical writer.",
      "Improve the project description into 2-3 crisp sentences plus 3 bullet points.",
      "Focus on impact, problem solved, and tech choices. Keep it realistic.",
      "Return plain text (no markdown headings).",
      `Target role: ${body.targetRole}.`,
      `Project title: ${body.title}.`,
      body.technologies.length ? `Technologies: ${body.technologies.join(", ")}.` : "",
      body.bullets.length ? `Existing notes: ${body.bullets.join(" | ")}.` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const completion = await client.responses.create({
      model: env.OPENAI_MODEL,
      input: prompt,
      temperature: 0.5,
      max_output_tokens: 280,
    });

    const text = completion.output_text?.trim();
    if (!text) throw new HttpError(502, "Empty AI response");

    res.json({ description: text });
  } catch (err) {
    if (err instanceof z.ZodError) return next(new HttpError(400, "Validation error", err.flatten()));
    return next(err);
  }
}

async function suggestSkills(req, res, next) {
  try {
    const body = suggestSkillsSchema.parse(req.body);
    const client = getOpenAIClient();
    if (!client) throw new HttpError(503, "OpenAI is not configured");

    const prompt = [
      "You are a tech career coach.",
      "Suggest 10 relevant skills as a JSON array of strings.",
      "Avoid duplicates. Prefer industry-standard names.",
      `Role: ${body.role}. Seniority: ${body.seniority}.`,
      body.currentSkills.length ? `Already have: ${body.currentSkills.join(", ")}.` : "",
      "Return ONLY valid JSON.",
    ]
      .filter(Boolean)
      .join("\n");

    const completion = await client.responses.create({
      model: env.OPENAI_MODEL,
      input: prompt,
      temperature: 0.4,
      max_output_tokens: 180,
    });

    const text = completion.output_text?.trim();
    let skills = [];
    try {
      skills = JSON.parse(text);
    } catch {
      throw new HttpError(502, "AI returned invalid JSON");
    }
    if (!Array.isArray(skills)) throw new HttpError(502, "AI returned invalid skills list");

    res.json({ skills: skills.slice(0, 20) });
  } catch (err) {
    if (err instanceof z.ZodError) return next(new HttpError(400, "Validation error", err.flatten()));
    return next(err);
  }
}

module.exports = { generateBio, generateProjectDescription, suggestSkills };

