package com.rlogman.test.shoppinglist.dataaccess;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.rlogman.test.shoppinglist.domain.ShoppingListItem;

@RepositoryRestResource(collectionResourceRel = "shoppingListItems", path = "shopping-list-items")
public interface ShoppingListItemRepository extends PagingAndSortingRepository<ShoppingListItem, Long> {
}