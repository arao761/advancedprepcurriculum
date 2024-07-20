import { GridPattern } from '@/components/GridPattern'

export function HeroPattern() {
    return (
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-35rem] h-[20rem] w-[70rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#276749] to-[#1b4332] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#276749]/30 dark:to-[#1b4332]/30 dark:opacity-100">
            <GridPattern
              width={72}
              height={56}
              x={-12}
              y={4}
              squares={[
                [4, 3],
                [2, 1],
                [7, 3],
                [10, 6],
              ]}
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
            />
          </div>
          <svg
            viewBox="0 0 1113 440"
            aria-hidden="true"
            className="absolute left-1/2 top-0 ml-[-17rem] w-[60rem] fill-white blur-[26px] dark:hidden"
          >
            <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
          </svg>
        </div>
      </div>
    )
  }