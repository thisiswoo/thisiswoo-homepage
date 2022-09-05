import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaWonSign, FaDollarSign } from 'react-icons/fa'
// import { useTranslation } from 'react-i18next';

const ChangeLanguageButton = () => {
    
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          colorScheme={useColorModeValue('yellow', 'green')}
          // icon={useColorModeValue(<FaWonSign />, <FaDollarSign />)}
          icon={<FaWonSign />, <FaDollarSign />}
          // onClick={}
          // key={}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ChangeLanguageButton
