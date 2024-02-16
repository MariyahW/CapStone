import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Back from "./Back";
import Data from "./Data";
import Lead from "./Lead";
import backend from '../visuals/coding_warp.png';
import lead from "../visuals/action.png";
import data from "../visuals/data.png";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Blog(props) {

  const params = useParams();
  const blog =params.blog;
 
  return (


    <div id="blogMain">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={backend}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Exploring the Intricate World of Backend Development</MDBCardTitle>
            <MDBCardText>
            Imagine a bustling city with skyscrapers reaching towards the heavens, traffic flowing smoothly, and people going about their daily lives. But what keeps this city running seamlessly behind the scenes? It's the infrastructure, the power grid, the transportation systems, and the intricate network of communication that ties everything together. In the world of software development, the backend plays a similar role. It is the backbone of any application, the hidden force that enables all the magic to happen. In this blog post, we will delve into the power of backend development, exploring its importance, capabilities, and the remarkable impact it has on the digital landscape.
            </MDBCardText>
          </MDBCardBody>
          <MDBBtn href={Back}>Read More!</MDBBtn>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={data}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Why Data Analytics is Critical to Your Business's Growth: A Tale of Two Competitors</MDBCardTitle>
            <MDBCardText>
            A Tale of Two Competitors Imagine two companies in the same industry, offering similar products and services. Company A is a traditional firm, relying on experience, intuition, and conventional wisdom to make decisions. Company B, on the other hand, embraces data analytics, using it to make informed decisions based on objective facts. Over time, Company A begins to struggle, while Company B thrives.
            <br />
            <br />
            But why does this happen?
            </MDBCardText>
          </MDBCardBody>
          <MDBBtn href={Data}>Read More!</MDBBtn>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={lead}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>The Importance of Leadership in Achieving Financial Success</MDBCardTitle>
            <MDBCardText>
            Imagine a world where leaders not only inspire their teams but also empower them to achieve financial success. In today's fast-paced, competitive business environment, strong leadership is more important than ever to ensure not only the survival of a company but also its growth and prosperity. The ability to lead effectively can make or break an organization, and it is often the difference between a business that thrives and one that flounders. In this blog post, we will explore the importance of leadership in achieving financial success, examining the key attributes of effective leaders and how they can be developed and nurtured within an organization.
            </MDBCardText>
          </MDBCardBody>
          <MDBBtn href={Lead}>Read More!</MDBBtn>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  )
}
