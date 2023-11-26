import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"



export default function About({data}) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.AboutPhoto.childImageSharp.fluid} />
        <TextBody>
          Mỗi ngày trôi qua, bản thân luôn cảm thấy có những sự thay đổi, không chỉ về diện mạo (già hơn), mà còn là con người thứ hai bên trong: 
          tâm hồn, cách suy nghĩ, lăng kính quan sát với thế giới và cuộc sống. Sự thay đổi này không theo một trật tự hay một qui luật nào,
          có thể đến một cách bất ngờ, qua những điều mình nghe, đọc, qua những trải nghiệm, quan sát, những biến cố, nỗi đau hay vất ngã, qua sự chấp nhận, thỏa hiệp hay tháo gỡ, chúng
          như những dòng chảy hỗn độn và phức tạp, những dòng suy nghĩ miên man chẳng mấy chốc lạc lối và bị lãng quên dù còn trong tiềm thức.
          <br></br><br></br>
          Và mình nghĩ đến lúc phải viết nhiều hơn, phải viết để lưu giữ những gì đang xảy ra ở thực tại, bất cứ thứ gì hay ho! ^^
          Mình hy vọng những bài viết trong blog này có thể tác động tích cực đến bạn, dù nhiều hay ít.
          - Duy Hùng 
        </TextBody>
        <Button href="mailto:your&#64;hungduy1270@gmail.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    RandomPhoto: file(relativePath: {eq: "assets/images/RandomPhoto.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    AboutPhoto: file(relativePath: {eq: "assets/images/about.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`
