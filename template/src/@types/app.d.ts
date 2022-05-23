declare module App {
  export type Dispatch = typeof import('app/store').store.dispatch

  type GetState = typeof import('app/store').store.getState
  export type RootState = ReturnType<GetState>

  export type Thunk<ReturnType = void> = import('@reduxjs/toolkit').ThunkAction<
    ReturnType,
    RootState,
    unknown,
    import('@reduxjs/toolkit').Action<string>
  >
}
