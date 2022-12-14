import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { CyclesContext } from '../../contexts/CyclesContext'

import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import {
  HomeContainer,
  StartCoundownButton,
  StopCoundownButton,
} from './styles'

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, 'Enter a task'),
  minutesAmount: zod
    .number()
    .min(5, 'The interval must be at least 5 minutes')
    .max(60, 'The interval must be a maximum of 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const isSubmitDisabled = !watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCoundownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Stop
          </StopCoundownButton>
        ) : (
          <StartCoundownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Start
          </StartCoundownButton>
        )}
      </form>
    </HomeContainer>
  )
}
