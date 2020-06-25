import React from 'react'
import { UncontrolledCarousel,Jumbotron,Button } from 'reactstrap'

const items = [
   {
     src: 'https://livingonthecheap.com/lotc-cms/wp-content/uploads/2016/07/How-to-keep-summer-veggies-fresh-to-avoid-food-waste.jpg',
     altText: 'FRESH INGREDIENTS GUARANTEE',
     caption: 'WE ALWAYS MAKESURE OUR PRODUCT FRESH UNTIL WE DELIVER TO YOUR HOUSE',
     header: 'FRESH INGREDIENTS GUARANTEE',
     key: '1'
   },
   {
     src: 'https://img.grouponcdn.com/deal/jkYEAoseqccBcdZ7DBXh2E/IMAGE_IT-University-Cooking-Lessons--NAT--Online--2048x1229/v1/c700x420.jpg',
     altText: 'Slide 2',
     caption: 'Profesional chef will guide',
     header: 'Our Professional Chef will guide your cooking experience',
     key: '2'
   },
   {
     src: 'https://i2.wp.com/www.lokalocal.com/blog/wp-content/uploads/2020/03/online-groceries-delivery-malaysia.png?fit=1000%2C700&ssl=1',
     altText: 'Slide 3',
     caption: 'We Deliver to your doorstep',
     header: 'Free Delivery service if you subcribe',
     key: '3'
   }
 ];


export default function Home() {
   return (
      <div>
          <Jumbotron>
        <h1 className="display-3">Hello!</h1>
        <p className="lead">Welcome to MASAKNDIRI.com</p>
        <hr className="my-2" />
        <p>Feeling bored during this quarantine?</p> 
        <p>Come and Join us and feel the experience of cooking that you never feel before</p>
        <p className="lead">
          <Button color="primary">Subscription</Button>
        </p>
      </Jumbotron>
         <div style={{width: 1000, height:500,
        display: "flex",
        justifyContentL :"center",
        alignItems : "center"}} >
            <UncontrolledCarousel items={items} />
         </div>
      </div>
   )
}
