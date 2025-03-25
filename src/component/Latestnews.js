import React from "react";
import CstmContainer from "../common/CstmContainer";
import CstmRow from "../common/CstmRow";
import CstmCol from "../common/CstmCol";
import BlogCard from "../common/BlogCard";
import Heading from "../common/Heading";
import { LuTag } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { PiChatCentered } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { Element } from 'react-scroll';
import BlogOneImage from '../Assets/images/LatestNews/Blog-1.svg';
import BlogTwoImage from '../Assets/images/LatestNews/Blog-2.svg';
import BlogThreeImage from '../Assets/images/LatestNews/Blog-3.svg';
const LatestNews = () => {
    const Data = [
        {
            src: BlogOneImage,
            alt:'Blog-1',
            date:'18', 
            month: 'Nov', 
            categories: [<LuTag /> ,'Food'], 
            admin: [ <FaRegUser />,'By Admin'], 
            comments: [<PiChatCentered />,'65 Comments'],
            text: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
            btnText: ['Read More',<GoArrowRight />],
        },
        {
            src: BlogTwoImage,
            alt:'Blog-1',
            date:'29', 
            month: 'Jan', 
            categories: [<LuTag /> ,'Food'], 
            admin: [ <FaRegUser />,'By Admin'], 
            comments: [<PiChatCentered />,'65 Comments'],
            text: 'Eget lobortis lorem lacinia. Vivamus pharetra semper.',
            btnText: ['Read More',<GoArrowRight />],
        },
        {
            src: BlogThreeImage,
            alt:'Blog-1',
            date:'21', 
            month: 'Feb', 
            categories: [<LuTag /> ,'Food'], 
            admin: [ <FaRegUser />,'By Admin'], 
            comments: [<PiChatCentered />,'65 Comments'],
            text: 'Maecenas blandit risus elementum mauris malesuada.',
            btnText: ['Read More',<GoArrowRight />],
        },
    ]
    return(
        <Element className="element" name="blog" id="blog">
            <CstmContainer>
                <div className="spacer">
                    <div>
                        <Heading title="Latest News" textAlign={'center'} xs={12}/>
                        <CstmRow>
                            {Data.map((data,index) => (
                                <CstmCol lg={4} md={6} xs={12} className="mb-3 mb-md-4 mb-lg-0">
                                    <div className="blog-card" key={index}> 
                                        <BlogCard src={data.src} alt={data.alt} date={data.date} month={data.month} categories={data.categories} admin={data.admin} comments={data.comments} text={data.text} btnText={data.btnText}/>
                                    </div>
                                </CstmCol>
                            ))}
                        </CstmRow>
                    </div>
                </div> 
            </CstmContainer>
        </Element>
    )
}
export default LatestNews