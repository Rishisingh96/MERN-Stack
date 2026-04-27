"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai...`;
    }
    if (size === "medium" || size === "large") {
        return `make extra chai..`;
    }
    return `chai order #${size}`;
}
class kullhadChai {
    serve() {
        return `Serving kulhad Chai..`;
    }
}
class cutting {
    serve() {
        return `Serving cutting Chai..`;
    }
}
function serve(chai) {
    if (chai instanceof kullhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" && obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `Masala chai`;
            break;
        case "elaichi":
            return `elaichi chai`;
            break;
        case "ginger":
            return `ginger chai`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
    }
}
//# sourceMappingURL=typeNarrowing.js.map