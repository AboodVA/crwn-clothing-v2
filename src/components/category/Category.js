import "./Category.styles.scss";
import CategoryItem from "./CategoryItem";

const Category = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((cat, i) => {
        return (
          <CategoryItem key={i} imageUrl={cat.imageUrl} title={cat.title} />
        );
      })}
    </div>
  );
};

export default Category;
