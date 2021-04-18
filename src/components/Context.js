import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "咒術迴戰 14",
                "images": ["https://i.imgur.com/hYeJP3i.jpg",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/087/94/0010879443.jpg&v=5fdb3349&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/082/33/0010823314.jpg&v=5ce524ec&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/087/17/0010871720.jpg&v=5f69d247&w=348&h=348"],
                "publish": "東立",
                "description": "芥見 下々",
                "content": "虎杖在追查詛咒殺人事件時，遇到了現場目擊者順平，也跟他很聊得來。然而，其實順平早已投向了這次事件的真兇，咒靈・真人那一邊。真人利用順平崇拜他的心理，暗中策劃要順平去跟虎杖戰鬥。而陷入真人陰謀中的順平則是……",
                "price": 100,
                "smalltitle":["咒術迴戰 13","咒術迴戰 1","咒術迴戰 11"],
                "smallprice":[100,100,100],
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "進擊的巨人 25",
                "images": ["https://image.bookwalker.com.tw/upload/product/51040/zoom_big_51040.jpg",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/088/55/0010885504.jpg&v=60377c6f&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/076/67/0010766704.jpg&v=59ca2c49&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/075/02/0010750240.jpg&v=58f0a4b7&w=348&h=348"],
                "publish": "東立",
                "description": "諫山 創",
                "content": "長期以來瑪雷始終威脅著艾連他們所居住的帕拉迪島。每天，有一群人為了保護祖國，也為了維護自己的人權而持續奮鬥。他們為了展現自己的存在價值，準備向帕拉迪島「宣戰」，然而出現在那裡的卻是……。",
                "price": 100,
                "smalltitle":["進擊的巨人 33","進擊的巨人 23","進擊的巨人 22"],
                "smallprice":[100,100,100],
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "一拳超人 19",
                "images": ["https://www.tongli.com.tw/ComicImages/Images/JC0937/JC0937019/JC0937019.jpg", 
                            "https://cdn.kingstone.com.tw/book/images/product/20194/2019479891253/2019479891253b.jpg",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/083/38/0010833855.jpg&v=5d70e3b3&w=348&h=348",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/011/96/M010119629.jpg&v=5fed8c11&w=348&h=348"],
                "publish": "東立",
                "description": "ONE, 村田雄介 ",
                "content": "仰慕餓狼的少年垂夫遭到怪人協會綁架。此時，在埼玉的房間內，傑諾斯等人正蠢蠢欲動地包圍著火鍋……餓狼隻身潛入怪人協會，結果將會如何？另一方面，英雄協會也正在執行豪任幸的營救計畫？",
                "price": 100,
                "smalltitle":["一拳超人 22","一拳超人 20","一拳超人 23"],
                "smallprice":[100,100,100],
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "灌籃高手 9",
                "images": ["https://assets.juksy.com/files/articles/83369/800x_100_w-5bbadc01895da.jpg",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/080/65/0010806528.jpg&v=5bf541c6&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/080/65/0010806526.jpg&v=5bf541c6&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/080/65/0010806506.jpg&v=5bf541c5&w=348&h=348"],
                "publish": "尖端 ",
                "description": "井上雄彥",
                "content": "櫻木花道在中學時代連續被50名女孩子拒絕，後來進入湘北高校就讀，對赤木晴子一見鍾情。「同學，你喜歡打籃球嗎？」晴子的這句話，讓惡名昭彰的花道，高中生活有了極大的變化！",
                "price": 100,
                "smalltitle":["灌籃高手 20","灌籃高手 19","灌籃高手 15"],
                "smallprice":[100,100,100],
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "海賊王 97",
                "images": ["https://www.tongli.com.tw/ComicImages/Images/JC137/JC13797/JC13797.jpg",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/010/59/M010105981.jpg&v=5e8c481b&w=348&h=348",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/010/03/M010100385.jpg&v=5e0acee5&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/009/16/M010091676.jpg&v=5d1d9ceb&w=348&h=348"],
                "publish": "集英社",
                "description": "尾田榮一郎",
                "content": "進攻前一刻，眾人發現勘十郎早已背叛，並且還趁機抓走了桃之助……錦右衛門一行人陷入絕望，但魯夫、羅、基德三人在此時組成共同戰線，為眾人帶來希望之光！一群人於是浩浩蕩蕩殺向鬼島！一場爭奪「ONE PIECE」的海上冒險故事！",
                "price": 105,
                "smalltitle":["海賊王 96","海賊王 95","海賊王 93"],
                "smallprice":[100,100,100],
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "入間同學入魔了！11",
                "images": ["https://i.imgur.com/2h71JBF.jpg",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/48/M010124887.jpg&v=606d7b9e&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/010/80/M010108086.jpg&v=5ea00eb4&w=348&h=348",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/M01/012/00/M010120039.jpg&v=5fe45f9f&w=348&h=348"],
                "publish": "秋田書店",
                "description": "西修",
                "content": "無法拒絕任何拜託的老好人鈴木入間，是個從1歲開始就踏入社會、為了金錢東奔西走、在修羅場求生的十四歲少年，他的父母為了金錢將他賣給了惡魔！陰差陽錯之下他簽下了惡魔契約、進入了惡魔學院、成為了特待生，並且即將與學院第一的新生代表決鬥——",
                "price": 100,
                "smalltitle":["入間同學入魔了！20","入間同學入魔了！16","入間同學入魔了！19"],
                "smallprice":[100,100,100],
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "暗殺教室 21",
                "images": ["https://www.tongli.com.tw/ComicImages/Images/JC0400/JC0400021/JC0400021.jpg",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/072/47/0010724705.jpg&v=57a1c7aa&w=348&h=348",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/070/61/0010706163.jpg&v=56b0854b&w=348&h=348",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/069/73/0010697331.jpg&v=56616b44&w=348&h=348"],
                "publish": "東立",
                "description": "松井優征",
                "content": "中學畢業後，渚他們究竟會分別走上什麼路呢……『暗殺教室』感人肺腑的完結篇！同時收錄殺老師大人的私生活的番外篇！",
                "price": 100,
                "smalltitle":["暗殺教室 20","暗殺教室 17","暗殺教室 16"],
                "smallprice":[100,100,100],
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "食戟之靈 36",
                "images": ["https://img.ruten.com.tw/s1/4/a0/31/21720309633073_262.jpg",
                            "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/079/12/0010791203.jpg&v=5b2ccffe&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/079/92/0010799204.jpg&v=5b9799ea&w=348&h=348",
                            "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/072/47/0010724708.jpg&v=57a1c7aa&w=348&h=348"],
                "publish": "東立",
                "description": "附田祐斗, 佐伯俊",
                "content": "(完結篇)THE BLUE決戰，創真以充滿了母親回憶的炒飯成功打敗了才波朝陽，獲得與繪里奈再次對決的機會。然而此時的繪里奈陷入迷惘而變得盲目，令創真看不下去。他決定用自己的料理，喚醒繪里奈的神智……食戟之靈，堂堂完結！",
                "price": 100,
                "smalltitle":["食戟之靈 29","食戟之靈 30","食戟之靈 19"],
                "smallprice":[100,100,100],
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
           
        ],
        cart: [],
        total: 0
    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id //連續點擊=false
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("該商品已被加入至購物車。")
        }
    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    removeProduct = id => {
        if(window.confirm("您確定刪除這項產品嗎?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
    };

    getTotal = () =>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    };
    

    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}