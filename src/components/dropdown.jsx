import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";
import Colorchange from "./colorchange";
import { color } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

function Dropdown() {
	const [Color, setColor] = React.useState("");

	const handleChange = (event) => {
		setColor(event.target.value);
	};
	console.log(color);
	return (
		
		<>
			<Container maxWidth="sm" className="container">
				<Box sx={
					{ 
					height:150,
					width:300,					
					}}>
					<FormControl fullWidth >
						<InputLabel id="demo-label"></InputLabel>
						<Select
						style={{
								outline:0,
								border:null,
								boxShadow:'revert',
													
						}}
							labelId="demo-label"
							id="demo"
							value={Color}
							onChange={handleChange}
							
						>
							
							<MenuItem value={"lime"}>Lime</MenuItem>
							<MenuItem value={"lavender"}>Lavender</MenuItem>
							<MenuItem value={"crimson"}>Crimson</MenuItem>
							<MenuItem value={"darkblue"}>Darkblue</MenuItem>
							<MenuItem value={"Teal"}>Teal</MenuItem>
							<MenuItem value={"rebeccapurple"}>Rebecca Purple</MenuItem>
							<MenuItem value={"ghostwhite"}>Ghost White</MenuItem>
							<MenuItem value={"aquamarine"}>Aqua Marine</MenuItem>
							<MenuItem value={"aliceblue"}>Alice Blue</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Colorchange bg={Color} />
			</Container>
		</>
	);
}
export default Dropdown;