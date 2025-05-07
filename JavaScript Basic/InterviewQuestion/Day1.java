import java.util.*;
public class Day1{
    public static void main(String[] args) {
       HashMap<String, Integer> map = new HashMap<>();
            map.put("Rishi",22);
            map.put("Ravi",23);
            map.put("Rohan",18);
            map.put("Saloni",17);
            map.put("Mohan",26);
            map.put("Garima",15);
            map.put("Sohan",28);
            map.put("Mohit",69);
            map.put("Raju",61);
            System.out.println(map);

            // First Way to print the map
            map.entrySet().stream()
                .filter(entry -> (entry.getValue() > 20) && (entry.getValue() < 60))
                .forEach(entry -> System.out.println(entry.getKey() + " " + entry.getValue()));
            

            // Second Way to print the map
            StringBuilder sb = new StringBuilder();
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                if ((entry.getValue() > 20) && (entry.getValue() < 60)) {
                    sb.append(entry.getKey()).append(" ").append(entry.getValue()).append("\n");
                }
            }
            System.out.println(sb.toString());

            // long count = map.values().stream().filter(age -> age > 20).count();
            // System.out.println("Count of users older than 20: " + count);
        
    }

}