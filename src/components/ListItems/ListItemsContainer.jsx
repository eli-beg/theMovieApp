import React from "react";
import { Box } from "@mui/material";
import ListItems from "./ListItems";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { getListItems } from "../../api/listItems";
import { useEffect } from "react";
import { useState } from "react";

const ListItemsContainer = () => {
  const [dataItem, setDataItem] = useState(null);
  const params = useParams();

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

  return (
    <Box>
      <ListItems dataItem={dataItem} />
    </Box>
  );
};

export default ListItemsContainer;
