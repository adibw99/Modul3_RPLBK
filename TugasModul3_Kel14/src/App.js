import React, { Component } from 'react';
import ProductList from './components/ProductList';
import InfoBuy from './components/InfoBuy';

import pecel from './assets/image/pecel.jpg';
import rendang from './assets/image/rendang.jpg';
import pempek from './assets/image/pempek.jpg';
import sate from './assets/image/sate.jpg';
import ronde from './assets/image/ronde.jpg';
import sekoteng from './assets/image/sekoteng.jpg';
import onde from './assets/image/onde-onde.jpg';
import klepon from './assets/image/klepon.jpg';

export default class App extends Component {
  render() {
    const products = [
      {
        id: 1,
        name: 'Pecel',
        price: 'Rp 15000',
        imageSrc: pecel,
        imageAlt: 'Gambar Pecel',
        category: 'Makanan',
      },
      {
        id: 2,
        name: 'Rendang',
        price: 'Rp 25000',
        imageSrc: rendang,
        imageAlt: 'Gambar Rendang',
        category: 'Makanan',
      },
      {
        id: 3,
        name: 'Pempek',
        price: 'Rp 20000',
        imageSrc: pempek,
        imageAlt: 'Gambar Pempek',
        category: 'Makanan',
      },
      {
        id: 4,
        name: 'Sate',
        price: 'Rp 22000',
        imageSrc: sate,
        imageAlt: 'Gambar Sate',
        category: 'Makanan',
      },
      {
        id: 5,
        name: 'Ronde',
        price: 'Rp 16000',
        imageSrc: ronde,
        imageAlt: 'Gambar Ronde',
        category: 'Minuman',
      },
      {
        id: 6,
        name: 'Sekoteng',
        price: 'Rp 17000',
        imageSrc: sekoteng,
        imageAlt: 'Gambar Sekoteng',
        category: 'Minuman',
      },
      {
        id: 7,
        name: 'Onde-Onde',
        price: 'Rp 14000',
        imageSrc: onde,
        imageAlt: 'Gambar Onde-onde',
        category: 'Cemilan',
      },
      {
        id: 8,
        name: 'Klepon',
        price: 'Rp 14000',
        imageSrc: klepon,
        imageAlt: 'Gambar Klepon',
        category: 'Cemilan',
      },
    ];

    const pemilik = [
      {
        name: 'Adib B',
        nomor: '089xxxxxxxx',
        email: 'adibbl@gmail.com',
      },
      {
        name: 'Hani',
        nomor: '088xxxxxxxx',
        email: 'haniku@gmail.com',
      },
    ];

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-center font-bold text-3xl">Produk Kami</h1>
          <br></br>
          <br></br>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              return <ProductList id={product.id} name={product.name} price={product.price} imageSrc={product.imageSrc} imageAlt={product.imageAlt} category={product.category} />;
            })}
          </div>
          <br></br>
          <br></br>

          <div className="bg-black">
            <h2 className="font-bold text-3xl text-white">Hubungi Kami</h2>
            <div className="text-white">
              {pemilik.map((test) => {
                return <InfoBuy name={test.name} nomor={test.nomor} email={test.email} />;
              })}
            </div>
          </div>
        </div>
        <footer />
      </div>
    );
  }
}
