import { useState, useEffect } from 'react'
import { CardFeedback } from '../../components/CardFeedback/CardFeedback'
import imageFeedback from '../../assets/icons/people.svg'
import imageExample from '../../assets/images/image-feedback.jpg'
import imageExample1 from '../../assets/images/7b8991267d2927a40598b6e69321a4f3.jpg'

export function SectionFeedback() {
  const feedbacks = [
    {
      name: 'Maria Silva',
      professionalization: 'Professora de Matemática',
      image: imageFeedback,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac magna nec ipsum tincidunt fermentum.'
    },
    {
      name: 'João Trajano',
      professionalization: 'Professor de Física',
      image: imageExample,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac magna nec ipsum tincidunt fermentum.'
    },
    {
      name: 'Ana Oliveira',
      professionalization: 'Professora de Química',
      image: imageExample1,
      text: 'Graças à Maieutica RH, consegui uma oportunidade que tem tudo a ver com meu perfil. O processo foi rápido e bem organizado. Recomendo para quem quer algo prático e eficiente!'
    }
  ]

  const [currentFeedback, setCurrentFeedback] = useState(0)

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length)
  }

  const previousFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextFeedback()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <CardFeedback
        name={feedbacks[currentFeedback].name}
        professionalization={feedbacks[currentFeedback].professionalization}
        image={feedbacks[currentFeedback].image}
        text={feedbacks[currentFeedback].text}
        position={currentFeedback}
        onNext={nextFeedback}
        onPrevious={previousFeedback}
      />
    </div>
  )
}
