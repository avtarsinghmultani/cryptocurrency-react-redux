import React from "react";
import {Line} from "react-chartjs-2";
import {Container, Grid} from "@material-ui/core";


export default function Chart ({trend}) {
    const timeArray = trend.quotes.map((quote) => {
        return quote.time;
    })
    const priceArray = trend.quotes.map((quote) => {
        return quote.price;
    })
    const chartData = {
        labels: timeArray,
        datasets: [
            {
                label: 'Share Price',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: priceArray
            }
        ]
    }
    return(
        <React.Fragment>
            <Grid key={trend.id}item xs={12} sm={12} md={6} lg={6}>
            <Line
                data={chartData}
                width={300}
                height={150}
                options={{
                    title:{
                        display:true,
                        text:trend.name,
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'left'
                    }
                }}
            />
            </Grid>
        </React.Fragment>
    )
}