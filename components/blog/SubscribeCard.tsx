import { useState } from 'react'

import { Button } from '../button'
import { Card } from '../card'
import { Input } from '../form/input'

export const SubscribeCard = () => {
  const [email, setEmail] = useState<string>('')
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const onEmailChange = (newEmailValue: string) => setEmail(newEmailValue)

  const onSubscribe = async () => {
    setIsLoading(true)
    const res = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.trim() }),
    })

    setIsLoading(false)

    if (res.status === 200) {
      setIsSubscribed(true)
    } else {
      setError(true)
    }
  }

  if (isLoading) {
    return (
      <div className="-rotate-1">
        <Card color={`${isSubscribed ? 'emerald' : 'amber'}`}>
          <div className="text-center">
            <h3>⏱️ Hang on...</h3>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="-rotate-1">
      <Card color={`${isSubscribed ? 'emerald' : 'amber'}`}>
        {!isSubscribed && !error && (
          <div className="text-center">
            <div className="text-gray-800 font-medium text-lg">
              Subscribe to get notified about future posts
            </div>
            <form className="md:inline-flex md:items-center mt-4">
              <div className="md:w-72">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Your email"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mt-4 md:mt-0 ml-2">
                <Button label="Subscribe" onClick={onSubscribe} color="blue" />
              </div>
            </form>
          </div>
        )}
        {isSubscribed && (
          <div className="text-center">
            <h3>🎉 Thank you!</h3>
            <p className="mt-2 text-lg">
              You are succesfully subscribed and will receive an email when
              there are new posts.
            </p>
          </div>
        )}
        {error && (
          <div className="text-center">
            <h3>🙉 Oeps</h3>
            <p className="mt-2 text-lg">
              I was not able to add you to the mailing list. This means you are
              probably already a subscriber.
            </p>
            <div className="mt-4">
              <Button
                label="Try again"
                onClick={() => setError(false)}
                color="blue"
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
