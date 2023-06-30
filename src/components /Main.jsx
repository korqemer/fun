function Main() {

    return (
        <>
            <main className="py-6 bg-gray-100">
                <div>
                    <div className="min-h-screen w-screen flex flex-col items-start justify-center">
                        <h1 className="text-left text-6xl text-gray-800 mt-100 mb-8">Date Invitation. 2nd try</h1>
                        <h3 className="text-left text-4xl text-gray-500 mb-5">Hope you will not dump me again :) </h3>
                        <h4 className="text-left text-4xl text-gray-500 mb-5">Any time that works for you, prefertably on Saturday</h4>
                    </div>
                </div>

                <div className="full-screen"> {/* Plan */}
                    <h4 className="font-semibold text-6xl mt-4 ml-6">Agenda:</h4>

                    {/* Arba Wine Degustation */}
                    <div className="mt-8 rounded shadow-md">
                        <div className="bg-white">
                            <div className="ml-6">
                                <h3 className="font-bold text-2xl mb-4 border-b border-gray-200">Котокафе Solo Almaty</h3>
                                <h4 className="font-semibold">Место проведения: ​Улица Казыбек би, 85 </h4>
                                <h4 className="font-semibold mb-4">Время: 17:00 </h4>
                                <p>Уютное времяпрепровождение с более чем 10 разными кошками. Мы сможем выпить зеленого чая и перекусить, играя с кошками. Лично я хочу поиграть с Эсси, она выглядит очень мило.</p>
                                <p>Больше информации вы можете найти по <b className="text-sky-600"><a href="https://www.instagram.com/solo_catcafe_almaty/?hl=en">ссылке </a> </b></p>
                            </div>

                        </div>
                    </div>

                    <div className="mt-8 rounded shadow-md">
                        <div className="bg-white">
                            <div className="ml-6">
                                <h3 className="font-bold text-2xl mb-4 border-b border-gray-200">Пацацина</h3>
                                <h4 className="font-semibold">Место проведения: ​Достык, 42</h4>
                                <h4 className="font-semibold mb-2">Время: 18:30 </h4>
                                <p>Основное свидание состоится в Пацацине

                                    Это небольшое место, которым, насколько я знаю, управляет одна семья. У них отличное домашнее грузинское вино и очень вкусные хинкали.
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
                                <h4 className="font-semibold mb-4">Время: 20:00 </h4>

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
                                <h4 className="font-semibold mb-2">Время: 22:00
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