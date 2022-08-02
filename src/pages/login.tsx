import React from 'react'
import { signIn } from 'next-auth/react'

import { PageLayout } from '@/components/Layout'
import { AuthGitHubLogo, AuthGoogleLogo } from '@/svg/Socials'

const Login = () => {
  return (
    <PageLayout>
      <div className="flex min-h-screen flex-col justify-center pb-44 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 px-4 text-center text-3xl font-extrabold text-prog-gray-500">
            Log in to PROGRAMMING.IN.TH
          </h2>
        </div>
        <div className="mt-2 px-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-2 sm:rounded-lg sm:px-10">
            <div className="mt-6">
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <button
                    className="inline-flex w-full justify-center gap-3 rounded-md bg-white px-4 py-4 text-sm font-medium text-gray-500 shadow-md hover:bg-gray-50"
                    onClick={() => signIn('google')}
                  >
                    <AuthGoogleLogo className="h-5 w-5" />
                    <span>Sign in with Google</span>
                  </button>
                </div>

                <div>
                  <button
                    className="inline-flex w-full justify-center gap-3 rounded-md bg-white px-4 py-4 text-sm font-medium text-gray-500 shadow-md hover:bg-gray-50"
                    onClick={() => signIn('github')}
                  >
                    <AuthGitHubLogo className="h-5 w-5" />
                    <span>Sign in with GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Login
