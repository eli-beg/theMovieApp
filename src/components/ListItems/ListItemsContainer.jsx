import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ListItems from "./ListItems";
import { getListItems } from "../../api/listItems";

const ListItemsContainer = () => {
  const [dataItem, setDataItem] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const getList = useCallback(async () => {
    try {
      const data = await getListItems(params.item, params.section);
      if (data.status === 200) {
        setDataItem(data.data.results);
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
      display="flex"
      flexDirection="row"
      justifyContent="center"
      sx={{
        marginTop: "20px",
      }}
    >
      <ListItems
        dataItem={dataItem}
        handleOpenDetails={handleOpenDetails}
        category={params.item}
      />
    </Box>
  );
};

export default ListItemsContainer;
