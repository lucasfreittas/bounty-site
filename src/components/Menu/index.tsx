import { MenuContainer, MenuLinks, MenuActions, MenuWrapper } from "./styles";

import LogoBounty from '../../assets/logo-bountyControl-left.png';

import Image from "next/image";
import Link from "next/link";

import { Button } from "../Button";

export function Menu(){
    return(
        <MenuWrapper>
            <MenuContainer> 
                <Image src={LogoBounty} width={124} alt='Bounty Control Logo' quality={100}/>
                <MenuLinks>
                    <Link href={'/#'}>Blog</Link>
                    <Link href={'/#'}>Materiais Gratuitos</Link>
                    <Link href={'/#'}>Tarifas</Link>
                </MenuLinks>
                <MenuActions>
                    <Link href={'/#'}>Entrar</Link>
                    <Link href={'/#'}>
                        <Button
                            text="Abra a sua conta"
                            variant="primary"
                            size="md"
                        />
                        </Link> 
                </MenuActions>
            </MenuContainer>
        </MenuWrapper>
    )
}