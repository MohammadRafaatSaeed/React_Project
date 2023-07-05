import styled from "styled-components";


export const ProfileSkillsSection = styled.div `

    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSection = styled.div `

    width: 50%;
    float: left;
`

export const ProfileList = styled.ul `

    list-style: none
`
export const ProfileItem = styled.li `

    margin-bottom: 8px
`
export const Span = styled.span `

    display: inline-block;
    width: 100px;
    font-weight: bold
`
export const SpanWeb = styled.span`

    font-weight: normal;
    color: #eb5424
`

export const SkillsSection = styled.div`

    width: 50%;
    float: left;
`

export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const SkillsBar = styled.div`

    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const SkillsBarTitle = styled.span`

    float: left;
`
export const SkillsBarPerc = styled.span`

    float: right;
    margin-right: 100px
`
export const SkillsBarParents = styled.div`

    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
export const SkillsBarParentsSpan = styled.span`

    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`
export const SkillsBarParentsSpan1 = styled.span`

background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props) => props.titleWidth};
`

export const SkillsBarParentsSpan2 = styled.span`

background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 90%;
`
export const SkillsBarParentsSpan3 = styled.span`

background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 80%;
`

export const SkillsProfileTitle = styled.h2`

    font-size: 40px; 
    margin-bottom: 20px
`

export const SkillsProfileSpan = styled.span`
    font-weight: normal;
`