import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Tabs, Text } from '@geist-ui/core'
import React, { useState } from 'react';
// import Image from 'next/image'
import philippeWeddingday from '../public/weddingday_site.png'
import philippeTraveling from '../public/travel_site.png'
import philippeRegistry from '../public/registry_philippe.png'



export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Holden + Alexia Wedding</title>
        <meta name="description" content="Holden and Alexia are getting married." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Tabs initialValue="1">
          <Tabs.Item label="the wedding" value="1"><Image
            src={philippeWeddingday}
            alt="Picture of Philippe eating cake"
            width={600} 
            height={600} 
            placeholder="blur" 
          />
          
          <Text h2>Ceremony + Reception</Text><br /> 
          <Text font="1.5rem" marginTop={"-25px"} marginBottom={"0px"}>January 14, 2023 <br /> 3:00pm</Text><br /> 
          <Text font="1rem" marginTop={"0px"} marginBottom={"0px"}>La Lomita Ranch<br /> 1985 La Lomita Way<br />  San Luis Obispo, California 93401</Text>
          <Text font="1rem" marginTop={"25px"} marginBottom={"0px"}>Formal attire<br /> Adults only please </Text>
          <Text font="1rem" marginTop={"25px"} marginBottom={"0px"}>Plenty of parking available,<br /> and overnight parking allowed.<br /> Lyft and Uber friendly.</Text>
          </Tabs.Item>
          <Tabs.Item label="travel" value="2"><Image
            src={philippeTraveling}
            alt="Picture of Philippe traveling"
            width={600} 
            height={600} 
            placeholder="blur" 
          /><Text h2>Travel and stay.</Text>
          <p>Accomodations:</p>
          <a href="https://hotels.cloudbeds.com/reservation/naltrC?allotment_block_code=b742818#checkin=2023-01-13&checkout=2023-01-15&allotment_block_code=b742818"> La Lomita Ranch</a><br />
          <a href="https://hotel-slo.com/">Hotel Slo</a><br />
          <a href="https://www.hotelcerro.com/">Hotel Cerro</a><br />
          <a href="https://cliffshotelandspa.com/">The Cliffs Hotel</a><br />
          <a href="https://www.thedolphinbay.com/">Dolphin Bay</a><br />
          <a href="https://www.innatthecove.com/">Inn at the Cove</a><br />
          <a href="https://www.agrarianhotel.com/">The Agrarian Hotel</a>
          <p>Restaurants:</p>
          <a href="https://thespoontrade.com/">The Spoon Trade</a><br />
          <a href="https://www.tasteslo.com/">Taste</a><br />
          <a href="http://www.emberwoodfire.com/">Ember</a><br />
          <a href="https://www.houseoftherisingbuns.com/">House of the Rising Buns</a><br />
          <a href="https://woodfired.palomesapizza.com/">Palo Mesa Wood Fired Pizza</a>
          <p>Winery + Brewery:</p>
          <a href="https://www.theredoesnotexist.com/">There Does Not Exist</a><br />
          <a href="https://kulturhausbrewing.com/">Kulturhaus</a><br />
          <a href="https://www.baileyana.com/">Baileyana</a><br />
          <a href="https://www.biddleranch.com/">Biddle Ranch</a>
          </Tabs.Item>
          <Tabs.Item label="registry" value="3"><Image
            src={philippeRegistry}
            alt="Picture of Philippe with gifts"
            width={600} 
            height={600} 
            placeholder="blur" 
          /><Text h2>Registry.</Text>
          <a href="https://www.heathceramics.com/apps/registry/holden-alexias-wedding-231312">Heath Ceramics</a><br />
          <a href="https://www.williams-sonoma.com/registry/fvnn8xn5k2/registry-list.html">Williams Sonoma</a>
          </Tabs.Item>
        </Tabs>
      </main>

      <footer className={styles.footer}>
          Holden and Alexia are Getting Married!
      </footer>
    </div>
  )
}
