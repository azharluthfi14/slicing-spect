import React from 'react'
import maticIcon from '../../public/matic.png'
import btcIcon from '../../public/btc.png'
import ethIcon from '../../public/eth.png'
import solanaIcon from '../../public/solana.png'
import avalIcon from '../../public/avalanche.png'

export default function TokenSection() {

    const dataToken = [
        {
            id: 1,
            currency: 'BTC',
            name: 'Bitcoin Token',
            balance: 0.000323,
            icon: btcIcon
        },
        {
            id: 2,
            currency: 'BTC',
            name: 'Matic Token',
            balance: 0.000023,
            icon: maticIcon
        },
        {
            id: 3,
            currency: 'ETH',
            name: 'Ethereum Token',
            balance: 0.000023,
            icon: ethIcon
        },
        {
            id: 4,
            currency: 'ETH',
            name: 'Solana Token',
            balance: 0.001023,
            icon: solanaIcon
        },
        {
            id: 5,
            currency: 'BTC',
            name: 'Avalanche Token',
            balance: 0.00053,
            icon: avalIcon
        },
        {
            id: 6,
            currency: 'BTC',
            name: 'BTC Token',
            balance: 0.002053,
            icon: btcIcon
        },
        {
            id: 7,
            currency: 'ETH',
            name: 'Matic Token',
            balance: 0.00053,
            icon: maticIcon
        },
        {
            id: 8,
            currency: 'ETH',
            name: 'Ethereum Token',
            balance: 0.002053,
            icon: ethIcon
        },
        {
            id: 9,
            currency: 'ETH',
            name: 'Ethereum Token',
            balance: 0.002053,
            icon: ethIcon
        },
        {
            id: 10,
            currency: 'BTC',
            name: 'Avalanche Token',
            balance: 0.00053,
            icon: avalIcon
        },
    ]

    return (
        <section className="py-20 px-5 layout">
            <div className="flex flex-col md:flex-row gap-6 text-white">
                <div className="w-full lg:w-5/12 bg-gradient-to-b from-[#27272727] to-[#11101da4]  rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-5">Get Test Tokens</h3>
                    <p className="text-secondary-grey text-sm">This faucet transfers TestToken on Matic testnets and parent chain. Confirm details before submitting.</p>
                    <div className="mt-8">
                        <label htmlFor="countries" className="block mb-3.5 font-medium">Select Token</label>
                        <select className="py-4 px-4 pr-9 bg-primary-black/50 block w-full border  text-secondary-grey border-primary-grey rounded-md text-sm">
                            <option selected>Select the tokens</option>
                        </select>
                    </div>
                    <div className="mt-8">
                        <label htmlFor="countries" className="block mb-3.5 font-medium">Wallet Address</label>
                        <div className="relative cursor-pointer">
                            <input type="text"
                                className="py-4 px-4 pr-9 bg-primary-black/50 block w-full border border-primary-grey rounded-md text-sm" placeholder="Input wallet address" />
                            <div className="absolute inset-y-0 right-0 text-sm flex items-center pr-4">
                                <button type="submit" className="bg-clip-text text-transparent bg-gradient-to-r
                                 from-[#A4EFF1] to-[#33BBCF] absolute right-3.5  bg-blue-700">Paste</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28">
                        <button type="button" className=" bg-gradient-to-r from-[#A4EFF1] to-[#33BBCF]  focus:outline-none
                       rounded-lg text-base w-full text-center py-4
                       ">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="w-full rounded-lg lg:w-7/12 bg-gradient-to-b from-[#27272727] to-[#11101da4] p-6">
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="border border-primary-grey rounded-lg shadow overflow-hidden">
                                    <table className="min-w-full divide-y divide-primary-grey">
                                        <thead>
                                            <tr className="divide-x divide-primary-grey">
                                                <th scope="col" className="px-6 w-6/12 py-5 text-center text-xs font-medium text-white uppercase">Tokens</th>
                                                <th scope="col" className="px-6 w-6/12 py-5 text-center text-xs font-medium text-white uppercase">Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody className=" text-center divide-primary-grey">
                                            {dataToken.map(({ id, name, balance, icon, currency }) => (
                                                <tr className="divide-x divide-primary-grey">
                                                    <td className="py-3 ml-5 flex items-center gap-3 whitespace-nowrap text-sm text-secondary-grey">
                                                        <img src={icon} alt="" />
                                                        <span>{name}</span>
                                                    </td>
                                                    <td className="py-3 whitespace-nowrap text-sm text-secondary-grey">{balance} {currency}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
