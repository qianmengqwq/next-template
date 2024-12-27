import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

// neutral
const shadcnCssVariable = {
  ':root': {
    '--background': '0 0% 100%',
    '--foreground': '0 0% 3.9%',
    '--card': '0 0% 100%',
    '--card-foreground': '0 0% 3.9%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '0 0% 3.9%',
    '--primary': '0 0% 9%',
    '--primary-foreground': '0 0% 98%',
    '--secondary': '0 0% 96.1%',
    '--secondary-foreground': '0 0% 9%',
    '--muted': '0 0% 96.1%',
    '--muted-foreground': '0 0% 45.1%',
    '--accent': '0 0% 96.1%',
    '--accent-foreground': '0 0% 9%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '0 0% 98%',
    '--border': '0 0% 89.8%',
    '--input': '0 0% 89.8%',
    '--ring': '0 0% 3.9%',
    '--chart-1': '12 76% 61%',
    '--chart-2': '173 58% 39%',
    '--chart-3': '197 37% 24%',
    '--chart-4': '43 74% 66%',
    '--chart-5': '27 87% 67%',
    '--radius': '0.5rem',
  },
  '.dark': {
    '--background': '0 0% 3.9%',
    '--foreground': '0 0% 98%',
    '--card': '0 0% 3.9%',
    '--card-foreground': '0 0% 98%',
    '--popover': '0 0% 3.9%',
    '--popover-foreground': '0 0% 98%',
    '--primary': '0 0% 98%',
    '--primary-foreground': '0 0% 9%',
    '--secondary': '0 0% 14.9%',
    '--secondary-foreground': '0 0% 98%',
    '--muted': '0 0% 14.9%',
    '--muted-foreground': '0 0% 63.9%',
    '--accent': '0 0% 14.9%',
    '--accent-foreground': '0 0% 98%',
    '--destructive': '0 62.8% 30.6%',
    '--destructive-foreground': '0 0% 98%',
    '--border': '0 0% 14.9%',
    '--input': '0 0% 14.9%',
    '--ring': '0 0% 83.1%',
    '--chart-1': '220 70% 50%',
    '--chart-2': '160 60% 45%',
    '--chart-3': '30 80% 55%',
    '--chart-4': '280 65% 60%',
    '--chart-5': '340 75% 55%',
  },
}

/*
    shadcn的bg-background/90语法依赖于hsl转换
    因此必须这样配置
*/

const shadcnConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
}

// :{}可以应用上对应的class
const shadcnApply = {
  '*': {
    '@apply border-border': {},
  },
  'body': {
    '@apply bg-background text-foreground': {},
  },
}

export const shadcnPlugin = plugin(
  ({ addBase }) => {
    addBase(shadcnCssVariable)
    addBase(shadcnApply)
  },
  shadcnConfig,
)
