package jar.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class Prime {

    @GetMapping("/api/prime")
    public String checkPrime(@RequestParam int n) {
        if (n < 2) return n + " is not prime";
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return n + " is not prime";
        }
        return n + " is prime";
    }

}
