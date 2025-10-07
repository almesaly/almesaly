import Script from "next/script";

interface SchemaInjectorProps {
  schema?: Record<string, unknown>;
  schemas?: Array<Record<string, unknown>>;
}

export function SchemaInjector({ schema, schemas }: SchemaInjectorProps) {
  const schemaArray = schemas || (schema ? [schema] : []);
  
  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
          strategy="afterInteractive"
        />
      ))}
    </>
  );
}



