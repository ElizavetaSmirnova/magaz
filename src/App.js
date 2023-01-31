import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Видеокарта Gigabyte GeForce RTX 3070 8 ГБ',
          img: 'videocard1.svg',
          smimg1: 'elekt/card1.svg',
          smimg2: 'elekt/card3.svg',
          smimg3: 'elekt/card4.svg',
          smimg4: 'elekt/card2.svg',
          descel1: 'Объем памяти: 8 ГБ, Тип памяти: GDDR6 ',
          descel2: 'Частота графического процессора: 1725 МГц',
          descel3: 'Ширина шины памяти: 256бит',
          descel4:'Интерфейсы: HDMI, DisplayPort',
          category: 'electronics',
          price: '2765200'
        },
        {
          id: 2,
          title: 'Настольные электронные часы, деревянный куб',
          img: 'clock.svg',
          smimg1: 'elekt/clock-black1.svg',
          smimg2: 'elekt/clock-black2.svg',
          smimg3: 'elekt/clock-black3.svg',
          smimg4: 'elekt/clock-black4.svg',
          descel1: 'Тип: Электронный будильник',
          descel2:'Тип индикации: Цифры + отметки',
          descel3:'Размеры, мм: 64x64x62',
          descel4:' Материал корпуса: ABS пластик, ПВХ',
          category: 'electronics',
          price: '588'
        },
        {
          id: 3,
          title: 'Мобильный телефон Nokia 3310, светло-синий',
          img: 'nokia1.svg',
          smimg1: 'elekt/nokia11.svg',
          smimg2: 'elekt/nokia12.svg',
          smimg3: 'elekt/nokia13.svg',
          smimg4: 'elekt/nokia14.svg',
          descel1: 'Тип: Мобильный телефон',
          descel2:'Число SIM-карт: 1',
          descel3:'Емкость аккумулятора, мАч: 900',
          descel4:' Основной материал корпуса: Пластик',
          category: 'electronics',
          price: '1128'
        },
        {
          id: 4,
          title: 'Галоши Колесник (в ассортименте)',
          img: 'boots.svg',
          smimg1: 'boots/Galoshi-yellow-main.svg',
          smimg2: 'boots/Galoshi-yellow1.svg',
          smimg3: 'boots/Galoshi-yellow2.svg',
          smimg4: 'boots/Galoshi-yellow3.svg',
          descel1: 'Материал: EVA',
          descel2:'Сезон: На любой сезон',
          descel3:'Пол: Девочки',
          descel4:'  Бренд в одежде и обуви Колесник',
          category: 'boots',
          price: '412'
        },
        {
          id: 5,
          title: 'плоские шнурки для обуви разноцветные',
          img: 'shnyrki.svg',
          smimg1: 'boots/snyrki-rainbow1.svg',
          smimg2: 'boots/snyrki-rainbow2.svg',
          smimg3: 'boots/snyrki-rainbow3.svg',
          smimg4: 'boots/snyrki-rainbow4.svg',
          descel1: 'Тип: Шнурки',
          descel2:'Страна-изготовитель: Россия',
          descel3:'Коллекция: Весна-лето 2022',
          descel4:'  Материал: Полиэфир',
          category: 'boots',
          price: '290'
        },
        {
          id: 6,
          title: 'тапочки Halluci (в ассортименте)',
          img: 'tapki.svg',
          smimg1: 'boots/brown-tapk1.svg',
          smimg2: 'boots/brown-tapk2.svg',
          smimg3: 'boots/brown-tapk3.svg',
          smimg4: 'boots/brown-tapk4.svg',
          descel1: 'Материал: Хлопок',
          descel2: 'Материал стельки: Хлопок',
          descel3: 'Материал подошвы: Термопластичная резина (ТПР)',
          descel4: 'Сезон: На любой сезон',
          category: 'boots',
          price: '1351'
        },
        {
          id: 7,
          title: 'игровой комплекс "Царапкин дом"',
          img: 'cathome.svg',
          smimg1: 'animals/Kogtetochka-main.svg',
          smimg2: 'animals/Kogtetochka1.svg',
          smimg3: 'animals/Kogtetochka2.svg',
          smimg4: 'animals/Kogtetochka3.svg',
          descel1: 'Материал основания: Фанера ',
          descel2: ' Предназначено для: Для кошек, Для собак, Для хорьков',
          descel3: 'Материал обивки когтеточки/игрового комплекса: Ковролин',
          descel4: 'Материал обмотки столбика: Джут',
          category: 'animals',
          price: '65507'
        },
        {
          id: 8,
          title: 'водоотталкивающая куртка для собаки',
          img: 'petwear.svg',
          smimg1: 'animals/Dog-red-main.svg',
          smimg2: 'animals/Dog-red1.svg',
          smimg3: 'animals/Dog-red2.svg',
          smimg4: 'animals/',
          descel1: 'Тип: Одежда для животных',
          descel2: 'Сезон: На любой сезон',
          descel3: 'Размер животного: Крупный, Малый, Средний',
          descel4: 'Порода собаки: Для любой породы',
          category: 'animals',
          price: '1616'
        },
        {
          id: 9,
          title: 'муравьиная ферма "Тропический Лес"',
          img: 'petplate1.svg',
          smimg1: 'animals/Muravi-green-main.svg',
          smimg2: 'animals/Muravi-green1.svg',
          smimg3: 'animals/Muravi-green2.svg',
          smimg4: 'animals/Muravi-green3.svg',
          descel1: 'Тип: Муравьиная ферма,, ,, ',
          descel2: 'Размеры, мм: 190*100*60',
          descel3: 'Бренд: Muraveydom',
          descel4: 'Предназначено для: Для муравьев',
          category: 'animals',
          price: '1499'
        }
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} />}
      <Footer/>
    </div>
  );
}

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category == 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}
deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}
addToOrder(item){
  let isInArrey = false;
  this.state.orders.forEach(el => {
    if(el.id === item.id){
      isInArrey = true
    }
  })
  if(!isInArrey){
    this.setState({orders:[...this.state.orders, item]})
  }
  
  }
}


export default App;
