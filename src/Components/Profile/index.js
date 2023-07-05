import React , {useEffect,useState} from 'react';
import {ProfileSkillsSection , ProfileSection , ProfileList , ProfileItem , Span , SpanWeb , SkillsSection , SkillsDesc , SkillsBar , SkillsBarTitle , SkillsBarPerc , SkillsBarParents , SkillsBarParentsSpan1 , SkillsBarParentsSpan2 , SkillsBarParentsSpan3 , SkillsProfileTitle , SkillsProfileSpan } from './style.js'
import axios from 'axios';



const Profile = ()=> {

    const [titles , setTitles] = useState ([])

    useEffect ( () => {
        axios.get('js/data.json').then(res => {setTitles(res.data.profile)})
    },[]
    )

    const profileList = titles.map((titleItem) => {
        return (
            <SkillsBar key={titleItem.id}>
            <SkillsBarTitle>{titleItem.title}</SkillsBarTitle>
            <SkillsBarPerc>{titleItem.body}</SkillsBarPerc>
            <SkillsBarParents>
                <SkillsBarParentsSpan1 titleWidth={titleItem.body} ></SkillsBarParentsSpan1>
            </SkillsBarParents>
            </SkillsBar>
        )
    }
    )

  return (
    <ProfileSkillsSection>
            <div className="container">
                <ProfileSection>
                    <SkillsProfileTitle><SkillsProfileSpan>My </SkillsProfileSpan>Profile</SkillsProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Mohammad Rafaat Saeed
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            01/01/1994
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Lattakia
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            Mohammad@Saeed.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.MohammadSaeed.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <SkillsSection>
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {profileList}
                </SkillsSection>
                
            </div>
        </ProfileSkillsSection>
  )
}


export default Profile;