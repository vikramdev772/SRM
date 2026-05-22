package jar.controller;

import java.util.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class Fact {

    @GetMapping("/api/fact")
    public static List<Long> fact(@RequestParam int n) {
        List<Long> list = new ArrayList<Long>();
        list.add(1L); 
        for (int i = 1; i <= n; i++) {
            long v = factCalc(i);
            list.add(v);
        }
        return list;
    }

    public static long factCalc(int n) {
        long result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}