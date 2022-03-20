const NewsWithImage = (props) => {
  return (
    <section className="news-with-image-container">
      <div className="news-content-with-image">
        <a href="#">
          <h3 className="headline-title">{props.newData.title}</h3>
        </a>

        <p className="headline-description">{props.newData.description}</p>
        <span className="time">৪৫ মিনিট আগে</span>
        <figure className="news-image">
          <img src={props.newData.photo} alt="" />
        </figure>
      </div>
      <div className="news-content">
        <h3 className="headline-title">
          কবরী, এখন তো আপনি সত্যি একলা মানুষ হয়ে গেলেন
        </h3>
        <p className="headline-description">
          আমরা জানি, কবরীর ৭১ বছরের জীবনে প্রায় ৫৮ বছর কেটেছে সিনেমাজগতে। সুভাষ
          দত্তের পরিচালনায় প্রথম সিনেমা সুতরাং-এ নায়ক সুভাষেরই বিপরীতে যখন
          অভিনয়জীবন শুরু করেন, তখন তিনি মাত্র ১৩ বছরের এক কিশোরী। সেই সিনেমার
          পর মিনা পাল থেকে কবরী নাম নেওয়া এই অভিনেত্রীর বিজয়ের যাত্রা শুরু। এই
          যাত্রাপথে তিনি অনেক স্বীকৃতি ও সম্মান পেয়েছেন, সফলতা এসেছে।
          নাটক-সিনেমায় অভিনয়, পরিচালনা, প্রযোজনা করতে গিয়ে শুধু সিনেমার নায়ক,
          গায়ক, পরিচালক, অভিনেতাই নয়; এর বাইরেও বহু মানুষের সঙ্গে মিশেছেন। এত
          কিছুর পরও ওই সাক্ষাৎকারে তিনি দুঃখ করে আমাকে বলেছিলেন, জীবনে একজন ভালো
          বন্ধু বা ভালো স্বামী তিনি পাননি। সঙ্গ দেওয়ার মতো একজন ভালো মানুষ
          পাননি, যাঁকে এ জীবনে বলতে পারেন, এসো, এক কাপ চা খাই, একটু গল্প করি।
        </p>
        <span className="time">৪৫ মিনিট আগে</span>
      </div>
    </section>
  );
};

export default NewsWithImage;
