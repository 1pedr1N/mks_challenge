import * as S from "../styles/profile"
import Input from "@/components/input"
import Link from "next/link"
const ProfilePage = () => {
    return (
        <S.Container>
            <Link href="/">
            <S.Header>
                <S.HeaderTitle>
                    ProfilePage
                </S.HeaderTitle>
                </S.Header> 
                </Link>


                <S.Content>
                    <S.ContentTitle>
                        My Profile
                    </S.ContentTitle>
                    <S.CenterInputs> 
                    <S.Inputs>
                      <Input label="First Name" type="text" placeholder="First Name" />
                      <Input label="Last Name" type="text" placeholder="Last Name" />
                      <Input label="Email" type="email" placeholder="Email" />
                        <Input label="Password" type="text" placeholder="Password" />
                        <Input label="Repeat Password" type="text" placeholder="Repeat Password" />
                    </S.Inputs>
                    </S.CenterInputs>
                    <S.CenterButton> 

                    <S.Button>
                        Save
                    </S.Button>
                    </S.CenterButton>
                  
                </S.Content>
        </S.Container>
    )
}

export default ProfilePage