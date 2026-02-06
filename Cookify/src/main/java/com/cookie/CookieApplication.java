package com.cookie;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cookie.dto.OrderListDTO;
import com.cookie.entities.Order;

@SpringBootApplication
public class CookieApplication {

	public static void main(String[] args) {
		SpringApplication.run(CookieApplication.class, args);
	}
	
	/*
	 * configure ModelMapper as spring bean
	 * <bean id class ...../>
	 * Add @Bean annotated method to return ModelMapper instance
	 * - to be managed by SC
	 */
	@Bean //method level annotation - to declare a method returning java object
	 ModelMapper modelMapper()
	{
		ModelMapper mapper=new ModelMapper();
		//configure mapper - to transfer the matching props (name + data type)
		mapper.getConfiguration()
		.setMatchingStrategy(MatchingStrategies.STRICT)
		//configure mapper - not to transfer nulls from src -> dest
		.setPropertyCondition(Conditions.isNotNull());
		
		
		// custom field mapping
	    mapper.typeMap(Order.class, OrderListDTO.class)
	          .addMappings(m -> m.map(src -> src.getMyCustomer().getId(), 
	                                  OrderListDTO::setCustomerId));

		
		
		
		return mapper;//Method rets configured ModelMapper bean to SC
	}

}
