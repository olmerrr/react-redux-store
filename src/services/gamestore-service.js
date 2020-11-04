export default class GamestoreService {
    data = [
        {
            id: 1,
            coverImage: 'https://upload.wikimedia.org/wikipedia/ru/thumb/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg/411px-%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg',
            title: 'Cyberpunk 2077',
            author: 'CD PROJEKT RED',
            genre: 'Role playing',
            price: 74
        },
        {
            id: 2,
            coverImage: 'https://upload.wikimedia.org/wikipedia/ru/c/c4/Rise_of_the_Tomb_Raider.png',
            title: 'Rise of the Tomb Raider',
            author: 'Microsoft',
            genre: 'Action & adventure',
            price: 49
        },
        {
            id: 3,
            coverImage: 'https://upload.wikimedia.org/wikipedia/ru/thumb/0/03/Red_Dead_Redemption_2_coverart.jpg/411px-Red_Dead_Redemption_2_coverart.jpg',
            title: 'Red Dead Redemption 2',
            author: 'Rockstar Games',
            genre: 'Action & adventure',
            price: 50
        },
        {
            id: 4,
            coverImage: 'https://upload.wikimedia.org/wikipedia/ru/5/5f/Forza_Horizon_4_coverart.jpg',
            title: 'Forza Horizon 4',
            author: 'Microsoft',
            genre: 'Racing',
            price: 42
        },
        {
            id: 5,
            coverImage: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/The_Witcher_3-_Wild_Hunt_Cover.jpg/411px-The_Witcher_3-_Wild_Hunt_Cover.jpg',
            title: 'The Witcher 3: Wild Hunt',
            author: 'CD PROJEKT RED',
            genre: 'Role playing',
            price: 60
        },

    ];
    getGames(){
       return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(this.data)
        }, 700)
       })
    }
}