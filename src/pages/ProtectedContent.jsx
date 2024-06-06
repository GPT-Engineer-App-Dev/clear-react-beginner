import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedContent = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/");
    }
  }, [session, navigate]);

  if (!session) {
    return null;
  }

  return (
    <Box>
      <Container centerContent maxW="container.md" height="calc(100vh - 80px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Protected Content</Text>
          <Text>This content is only visible to authenticated users.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default ProtectedContent;