package jar.controller;

import java.util.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class Sum {

    @GetMapping("/api/sum")
    public static List<Integer> sumOfN(@RequestParam int n) {
        List<Integer> list = new ArrayList<Integer>();
        list.add(0); 
        for (int i = 1; i <= n; i++) {
            int v = sumCalc(i);
            list.add(v);
        }
        return list;
    }

    public static int sumCalc(int n) {
        int total = 0;
        for (int i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    }
}