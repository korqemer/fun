function Main() {

    return (
        <>
            <main className="py-6 bg-gray-100">
                <div>
                    <div className="min-h-screen w-screen flex flex-col items-start justify-center">
                        <h1 className="text-left text-6xl text-gray-800 mt-100 mb-8">Date Invitation</h1>
                        <h3 className="text-left text-4xl text-gray-500 mb-5">Суббота, 24 июня | Проспект Абылай хана, 71</h3>
                    </div>
                </div>

                <div className="full-screen"> {/* Plan */}
                    <h4 className="font-semibold text-6xl mt-4 ml-6">Agenda:</h4>

                    {/* Arba Wine Degustation */}
                    <div className="mt-8 rounded shadow-md">
                        <div className="bg-white">
                            <div className="ml-6">
                                <h3 className="font-bold text-2xl mb-4 border-b border-gray-200">Wine Tasting</h3>
                                <h4 className="font-semibold">Место проведения: ​Проспект Абылай хана, 71</h4>
                                <h4 className="font-semibold mb-10">Время: 19:00 </h4>

                                <p>Вечер начнется с дегустации вин от Arba Wine. Было написано, что нам будут предложены 3 белых вина, а именно </p>

                                <ul className="list-disc mt-6 ml-6">
                                    <li>Altyn Arba Chardonnay, 2018 </li>
                                    <li>Sary Arba Rkatsiteli, 2016</li>
                                    <li>Ak Arba Kazakh Riesling, 2016</li>
                                </ul>

                                <p className="mt-6 mb-4"> и 3 красных вина </p>

                                <ul className="list-disc ml-6">
                                    <li>Pinot Arba Kazakh Pinot Noir, 2016 </li>
                                    <li>PinoSape, 2015</li>
                                    <li>Kyzyl Arba Cabernet Franc, 2015 </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Arba Wine */}
                    <div className="mt-8 rounded shadow-md">
                        <div className="bg-white">
                            <div className="ml-6">
                                <h3 className="font-bold text-2xl mb-4 border-b border-gray-200">Свидание</h3>
                                <h4 className="font-semibold">Место проведения: ​Проспект Абылай хана, 71</h4>
                                <h4 className="font-semibold mb-2">Время: 20:00 </h4>
                                <p>Вечер продолжится качественным отдыхом, в первую очередь за белым вином и сыром. Мы обсудим политику, любимые книги и взгляды на жизнь, а самое главное хорошие шутки с моей стороны.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Optional Walking near Tirenkur */}

                    <div className="mt-8 rounded shadow-md">
                        <div className="bg-white">
                            <div className="ml-6">
                                <h3 className="font-bold text-2xl mb-4 border-b border-gray-200">*Прогулка (Optional)</h3>
                                <h4 className="font-semibold">Место проведения: Парк им. 28 гвардейцев-панфиловцев</h4>
                                <h4 className="font-semibold mb-4">Время: 22:00 </h4>

                                <p>В зависимости от погодных условий, мы можем пойти на прогулку в парк. Обязательно прослушивание песен группы Валентин Стрыкало и Земфиры
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* Going Home */}
                    <div className="mt-8 rounded shadow-md">
                        <div className="bg-white">
                            <div className="ml-6">
                                <h3 className="font-bold text-2xl mb-4 border-b border-gray-200">Возвращение домой

                                </h3>
                                <h4 className="font-semibold">Место проведения: -
                                </h4>
                                <h4 className="font-semibold mb-2">Время: 23:00
                                </h4>

                                <p>После вечера я провожу вас домой, и мы обсудим время нашей следующей встречи.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
                {/* Contact Information */}

                <div className="bg-sky-400">
                    <div className="min-h-screen w-screen flex flex-col items-end justify-center">
                        <h1 className="text-left text-6xl text-gray-800 mt-100 mb-16 mr-12">Напишите мне</h1>
                        <h3 className="text-left text-2xl text-slate-50 mb-5 mr-12">Если вы согласны с приведенными выше планами, пожалуйста, напишите мне в телеграмм для подтверждения</h3>
                        <h3 className="text-left text-2xl text-slate-50 mb-5 mr-12">В случае возникновения вопросов, пожалуйста, не стесняйтесь, пишите мне </h3>
                    </div>
                </div>


            </main >
        </>

    )
}

export default Main