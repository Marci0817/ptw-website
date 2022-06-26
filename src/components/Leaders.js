import React from 'react'

const data = [{name: "Bencze Levente", desc:"A cég technológiai vezetője. A csapat technológiai fejlettségét és naprakészségét biztosítja. Újabb és újabb megoldási technikák után kutat."},{name: "Palya Gergely", desc:"A cég üzleti és stratégiai vezetője. Cégünk pénzügyeit, ügyfélkezelés és menedzselését ő végzi."}];
function Leaders(){
    const item = data.map((item) =>
        <div className="border-0 shadow-md hover:shadow-orange-300 bg-white p-8 my-6 mx-2 rounded-lg">
            <p className="text-xl uppercase">{item.name}</p>
            <p className="text-md text-justify text-gray-700 italic">{item.desc}</p>
        </div>
    );
    return(
        <div className="mt-8 md:flex md:flex-row md:w-1/2 mx-4 md:mx-auto">
            {item}
        </div>
    );
}

export default Leaders;