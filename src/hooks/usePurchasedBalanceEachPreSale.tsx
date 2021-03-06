import { useContractCall, useEthers } from "@usedapp/core";
import TokenForm from "../chain-info/contracts/TokenFarm.json"
import { utils, BigNumber, constants } from "ethers"
import networkMapping from "../chain-info/deployments/map.json"
import { useContext } from "react";
// import { MyContext } from "../App";
import { MyContext } from "../components/Header2";


export const usePurchasedBalanceEachPreSale = (address: string, preSaleNumber: string) => {

    const data = useContext(MyContext)
    const { chainIdentity, tokenFarmContractAddress } = data

    // console.log("You are in usePurchasedBalance Context: chainIdentity " + chainIdentity + " tokenFarmL " + tokenFarmContractAddress)




    const { account, chainId } = useEthers()
    // console.log(chainId)
    // console.log("usePurchasedBalance: chainId" + chainId)

    const { abi } = TokenForm
    // const tokenFarmContractAddress1 = (chainId ? ((String(chainId) == '42') ? networkMapping[String(chainId)]["TokenFarm"][0] : constants.AddressZero) : constants.AddressZero)
    const tokenFarmInterface = new utils.Interface(abi)


    const [totalPurchasedPreSaleTokensEachPreSale] = useContractCall({
        abi: tokenFarmInterface,
        address: tokenFarmContractAddress,
        method: "totalPurchasedPreSaleTokensEachPreSale",
        args: [preSaleNumber, account]
    }) ?? []

    const [purchasedBalanceEachPreSale] = useContractCall({
        abi: tokenFarmInterface,
        address: tokenFarmContractAddress,
        method: "purchasedBalanceEachPreSale",
        args: [preSaleNumber, account]
    }) ?? []

    return { totalPurchasedPreSaleTokensEachPreSale, purchasedBalanceEachPreSale }
}