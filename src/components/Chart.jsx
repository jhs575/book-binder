import React, { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PieChart() {

    const readList = JSON.parse(localStorage.getItem("readList") ?? "[]")

    const data = [];

    readList.forEach(book => {
        const bookObj = {
            name: book.bookName,
            uv: book.totalPages,
        }
        data.push(bookObj);
    });

    return (
        <BarChart
            width={500}
            height={500}
            data={data}
            margin={{
                top: 10,
                right: 100,
                left: 20,
                bottom: 100
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <Bar
                dataKey="uv"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
            <XAxis angle="-45" dataKey="name" />
        </BarChart>
    );
}