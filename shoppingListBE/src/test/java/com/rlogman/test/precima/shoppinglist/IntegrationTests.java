package com.rlogman.test.precima.shoppinglist;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.rlogman.test.precima.shoppinglist.domain.ShoppingListItem;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class IntegrationTests {
  private static final String SHOPPING_LIST_ITEMS_BASE_URI = "/shopping-list-items";
  @Autowired
  private TestRestTemplate restTemplate;

  @Test
  public void saveItem() {
    ShoppingListItem item = ShoppingListItem.builder()
    	.title("Item test")
        .build();

    ResponseEntity<?> response =
        restTemplate.postForEntity(SHOPPING_LIST_ITEMS_BASE_URI, item, ShoppingListItem.class);

    assertThat("Insertion of a new item failed", response.getStatusCode(),
        equalTo(HttpStatus.CREATED));
  }
}
