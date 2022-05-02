import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment, { locale } from 'moment';
import Api from 'API/Api';
import BoardCardContent from 'components/RoomBoard/readRoomBoardList/BoardCardContent';
import { Box, Card, Grid } from '@material-ui/core';

const BoardCard = (props) => {
    const { state } = props;

/* !--------------------------------Body--------------------------------! */
    /*const[postBody, setPostBody] = useState({
        boardId: id,
        title: title,
        user: { "id" : id },
        location: location,
        location_detail: location_detail,
        durationStart: startDate,
        durationEnd: endDate,
        price: price,
    });*/
    
    const postBody = {
		item: [{
			"boardId": 1,
			"title": "제목",
			"image": "image1",
			"price": "60000",
			"startDate": "2022-03-08",
			"endDate": "2022-04-05"
		}, {
			"boardId": 2,
			"title": "제목2",
			"image": "image2",
			"price": "220000",
			"startDate": "2044-03-08",
			"endDate": "2044-04-05"
		}]
    };

	const { id, title, image, price, startDate, endDate } = postBody;

    return (
        <div>
            <Box >
				<Grid
					container 
					spacing={3}
					sx={{
						width: '100%'
					}}
				>
					{
						postBody.item.map(row => (<
							BoardCardContent key={row.boardId}
							id={row.boardId}
							title={row.title}
							image={row.image}
                            price={row.price}
							startDate={row.startDate}
                            endDate={row.endDate}
						/>
						))
					}
				</Grid>
			</Box >
			<Grid
				item
				lg={10}
				md={10}
				sm={12}
				xs={12}
			>
				<Box
					sx={
						{
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex'
						}
					}
				>
				</Box>
			</Grid>
            
        </div>
    )
}

export default BoardCard