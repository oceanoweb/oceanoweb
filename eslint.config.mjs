import path from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"
import nextConfig from "eslint-config-next/core-web-vitals"

const compat = new FlatCompat({
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
})

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = Array.isArray(nextConfig)
  ? nextConfig
  : compat.extends("next/core-web-vitals")

export default eslintConfig
