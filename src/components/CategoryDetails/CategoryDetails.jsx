// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
// Все що закоментовано треба буде поновити
import file from '../../recipes.json';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
// import { selectCategories } from 'redux/categories/selectors';
import { nanoid } from 'nanoid';

const CategoryDetails = () => {
  // const [category, setCategory] = useState(
  //   file
  //     .map(data => data.category)
  //     .sort()
  //     .filter((category, index, array) => array.indexOf(category) === index)
  // );
  const [category] = useState(
    file
      .map(data => data.category)
      .sort()
      .filter((category, index, array) => array.indexOf(category) === index)
  );
  const [filterCategory, setFilterCategory] = useState(category[0]);
  const [filterList, setFilterList] = useState(file);

  // const categoryList = useSelector(selectCategories);

  const handleClick = e => {
    e.preventDefault();
    const category = e.target.textContent;
    setFilterCategory(category);
    setFilterList(
      file.map(data => data).filter(data => data.category === filterCategory)
    );
  };
  console.log(filterList);
  return (
    <Tabs>
      <TabList onClick={handleClick}>
        {category.map(category => (
          <Tab key={nanoid()}>{category}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {file.map(data => (
          <TabPanel key={data._id}>
            <ul>
              {filterList.map(({ title, _id, preview }) => (
                <li key={_id}>
                  <h3>{title}</h3>
                  <img src={preview} alt={title} />
                </li>
              ))}
            </ul>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default CategoryDetails;
