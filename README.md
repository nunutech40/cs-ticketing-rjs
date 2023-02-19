# CS-TIKETING-RJS
Project ini saya buat untuk membantu anak-anak magang menyelesaikan tugasnya di kantor. Saya membuat cs-tiketing-js dengan menggunakan react js dan tailwind untuk front endnya.
Buat teman-teman yang ingin belajar, silahkan mengambilnya, free.

dan untuk teman-teman yang ingin sekedar support atau membelikan saya kopi bisa ke:\
Saweria: https://saweria.co/nugraha17 \
Buyme Coffe: https://www.buymeacoffee.com/rfajarnugrx \

## Tentang Project CS-TIKETING-RJS

Project ini adalah project tiketing untuk membantu CS di kantor saya, melaporkan bug yang mereka dapatkan supaya lebih mudah di organisir, di catat, dan didokumentasi dengan baik.

# RUN THIS PROJECT
### `npm start`

****
****
****


# Install react js project => ganti my-app dengan nama project yang di inginkan.
```sh
npx create-react-app my-app
```
<br/>

# Setup Tailwind

* Install tailwind
```sh
npm install -D tailwindcss
```

* Add tailwind config js
```sh
npx tailwindcss init
```

* Buka tailwind.config.js dan copy kan code berikut:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```
* Masuk ke file index.css di _'./src/index.css'_ dan copy code berikut:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

untuk mengetahui apakah setup tailwind sudah terpasang dengan benar, coba cek berikut:
```js
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

Semua setingan basic sudah selesai. Install react dan setup tailwind sebagai framework css nya.
****
****
****
