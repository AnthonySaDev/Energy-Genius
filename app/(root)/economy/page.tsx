import React from 'react';
import { FaLeaf, FaChartLine, FaGlobe, FaHeart, FaMobileAlt } from 'react-icons/fa';

export default function Economy() {
    return (
        <div className="p-10 bg-gray-100">
            <h1 className="text-4xl my-10 font-bold text-green-700">Sobre a Energy Genius</h1>
            <p className="text-lg my-10">
                <FaLeaf className="inline-block mr-2 text-green-700" />
                A <strong>Energy Genius</strong> foi fundada em 2020 por um grupo de engenheiros apaixonados por energia renovável. Os fundadores, João Silva, Maria Santos e Carlos Oliveira, uniram-se com a visão de criar uma empresa que pudesse ajudar as pessoas a entenderem e controlarem melhor o seu consumo de energia.
            </p>
        
            <img src="https://mercadoeconsumo.com.br/wp-content/uploads/2023/05/ENERGIA_LIMPA_SHUTTER.jpg" alt="Small company" className="mr-10 w-1/5 rounded-lg my-10 hidden md:flex"/>
            
            <p className="text-lg my-10">
                A empresa começou pequena, com apenas uma ideia e um sonho. Mas com muito trabalho duro e dedicação, a Energy Genius cresceu e se tornou uma das principais empresas de tecnologia de energia do mundo. Hoje, ajudamos milhares de pessoas a economizar energia e dinheiro todos os dias.
            </p>
            <p className="text-lg my-10">
                <FaChartLine className="inline-block mr-2 text-blue-500" />
                Nossa missão é simples: queremos tornar a energia mais acessível, eficiente e sustentável para todos. Acreditamos que, ao fornecer às pessoas as ferramentas e informações de que precisam para entender seu consumo de energia, podemos ajudá-las a fazer escolhas mais informadas e sustentáveis.
            </p>
            <p className="text-lg my-10">
                <FaHeart className="inline-block mr-2 text-red-500" />
                Nossos valores são a sustentabilidade, a inovação e a transparência. Acreditamos que a energia deve ser usada de maneira responsável, que devemos sempre buscar novas maneiras de melhorar e que devemos ser abertos e honestos com nossos usuários.
            </p>
            <p className="text-lg my-10">
                <FaMobileAlt className="inline-block mr-2 text-yellow-500" />
                Oferecemos uma variedade de produtos e serviços para ajudar nossos usuários a economizar energia. Nosso aplicativo permite que os usuários monitorem seu consumo de energia em tempo real, recebam dicas personalizadas para economizar energia e vejam como seu consumo se compara ao de outros usuários semelhantes.
            </p>
            <p className="text-lg my-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWxf8OXJu1KMW2kl9vRxJc-PWxDb7nWQWDg&s" alt="Achievements" className="mr-10 w-1/5 rounded-lg my-10 hidden md:flex" />
                Ao longo dos anos, alcançamos vários marcos importantes. Em 2021, atingimos um milhão de usuários. Em 2022, lançamos nosso aplicativo em cinco novos países. E em 2023, fomos reconhecidos como uma das empresas mais inovadoras do setor de energia.
            </p>
            <p className="text-lg my-10">
                <FaGlobe className="inline-block mr-2 text-green-700" />
                Estamos constantemente inovando e buscando novas maneiras de ajudar nossos usuários a economizar energia. Seja através de novos recursos em nosso aplicativo, parcerias com empresas de energia ou pesquisas em tecnologias de energia verde, estamos comprometidos em ajudar nossos usuários a economizar energia e dinheiro.
            </p>
            <p className="text-lg my-10">
                No futuro, planejamos continuar crescendo e expandindo nossos serviços. Queremos alcançar mais usuários em todo o mundo e continuar a desenvolver novas maneiras de ajudar as pessoas a economizar energia. Estamos animados com o que o futuro nos reserva e esperamos que você faça parte da nossa jornada.
            </p>
            <p className="text-lg">
                Agradecemos por fazer parte da nossa jornada e estamos animados para continuar ajudando você a economizar energia e viver de forma mais sustentável.
            </p>
            <h1 className='text-2xl my-10' >Contato:</h1>
            <p>Email: contato@energygenius.com.br</p>
            <p>Telefone: (11) 99999-9999</p>
        </div>
    );
}
