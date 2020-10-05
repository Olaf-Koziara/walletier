import React from "react";
import { connect } from "react-redux";
import {
  StyledCategoriesMenuWrapper,
  StyledCategoriesList,
  StyledCategoriesListItem,
  StyledAnimatedButton,
} from "../styled";

const CategoriesMenu = ({ categories, setCategory }) => {
  return (
    <StyledCategoriesMenuWrapper>
      {categories ? (
        <StyledCategoriesList>
          <h2>Categories</h2>
          <StyledCategoriesListItem>
            <button onClick={() => setCategory("all")}>all</button>
          </StyledCategoriesListItem>
          {categories.map((category) => (
            <StyledCategoriesListItem>
              <button
                onClick={() => {
                  setCategory(category);
                }}
              >
                {category}
              </button>
            </StyledCategoriesListItem>
          ))}
        </StyledCategoriesList>
      ) : (
        <h2>No categories</h2>
      )}
    </StyledCategoriesMenuWrapper>
  );
};

export default CategoriesMenu;
