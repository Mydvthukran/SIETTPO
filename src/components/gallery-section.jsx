import { motion } from 'framer-motion'

const galleryItems = [
  { src: '/images/gallery/EDwise7.jpeg',  label: 'EDwise Guest Lecture — Full House',  span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/gallery/EDwise4.jpeg',  label: 'Speaker Presentation',               span: '' },
  { src: '/images/gallery/EDwise8.jpeg',  label: 'EDwise Session',                     span: '' },
  { src: '/images/gallery/EDwise11.jpeg', label: 'Students Attending',                 span: '' },
  { src: '/images/gallery/EDwise3.jpeg',  label: 'Interactive Round Table Session',    span: '' },
  { src: '/images/gallery/EDwise5.jpeg',  label: 'Dr. Divya with EDwise Team',           span: 'sm:col-span-2' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="gallery-header-label">
            Highlights
          </p>
          <h2 className="gallery-title">
            Events
          </h2>
          <p className="gallery-description">
            A glimpse into the events, drives, and activities at SIET Panchkula.
          </p>
        </motion.div>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              className={`gallery-item ${item.span === 'sm:col-span-2 sm:row-span-2' ? 'gallery-item-span-2 gallery-item-row-span-2' : item.span === 'sm:col-span-2' ? 'gallery-item-span-2' : ''}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="object-cover w-full h-full"
              />
              <div>
                <p className="gallery-item-label">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
