package com.nutrifinder.nutrifinder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class NutrifinderApplication {

	private static final Logger log = LoggerFactory.getLogger(NutrifinderApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(NutrifinderApplication.class, args);
	}
	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Bean
	@Profile("!test")
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args -> {
			String query = SearchTerm.passesSearchTerm();
			Foods food = restTemplate.getForObject(
					"https://api.nal.usda.gov/fdc/v1/foods/search?api_key=intnOzvjRdLQUdPgKcD3420RkD7pCogdZ3BYLwu6&query=" + query,
					Foods.class);
			log.info(food.toString());
		};
	}
}
