import * as React from "react";
import Box from "@mui/material/Box";

function ColorChange(color) {
	console.log(color);
	return (
		
		<Box
			className="box"
			sx={{
				width: 300,
				background: color.bg,
				height: 50,
				border: 3,
			}}
			
		/>
	);
}
export default ColorChange