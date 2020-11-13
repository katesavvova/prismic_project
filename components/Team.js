import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { Header } from './Header'

const apiEndpoint = 'https://nexttestdev.cdn.prismic.io/api/v2'

const Client = Prismic.client(apiEndpoint)


export const Team = () => {
  const [doc, setDocData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'profile')
      )
      console.log(response)
      if (response) {
        setDocData(response.results[0])
      }
    }
    fetchData()
  }, []);


  return (
    <>
      <Header />
      <article>
        {
          doc ? (
            <section className="profile">
              <div>
                  <img className="profile__image" src={doc.data.image.url} />
              </div>
              <div className="profile__text">
                <h4 className="profile__title">
                  {RichText.asText(doc.data.title)}
                </h4>
                <RichText render={doc.data.text} />

                <h4 className="profile__title">
                  Website
                </h4>
                <a
                  href={`${doc.data.link.url}`}
                  className="profile__link"
                >
                  {`${doc.data.link.url}`}
                </a>
              </div>
            </section>  
          ) : <div>No content</div>
        }
      </article>
    </>
  )
}
