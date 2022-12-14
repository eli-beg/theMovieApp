import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ListItems from "./ListItems";
import { getListItems } from "../../api/listItems";
import { convertUrlSectionToTitle } from "../../utils/convertUrlSectionToTitle";

const ListItemsContainer = () => {
  const [dataItem, setDataItem] = useState(null);
  const [section, setSection] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const getList = useCallback(async () => {
    try {
      const data = await getListItems(params.item, params.section);
      if (data.status === 200) {
        setDataItem(data.data.results);
        setSection(convertUrlSectionToTitle(params.section));
      }
    } catch (error) {
      console.error(error);
    }
  }, [params]);

  useEffect(() => {
    getList();
  }, [getList]);

  const handleOpenDetails = (id, category) => {
    navigate(`/details/${category}/${id}`);
  };

  return (
    <Box
      marginTop="40px"
      marginBottom="40px"
      marginLeft="5px"
      display="flex"
      justifyContent="center"
      xs={12}
    >
      <ListItems
        dataItem={dataItem}
        handleOpenDetails={handleOpenDetails}
        category={params.item}
        section={section}
      />
    </Box>
  );
};

export default ListItemsContainer;
